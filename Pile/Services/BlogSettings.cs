using System;
using System.Linq;
using Microsoft.Extensions.Configuration;

using Pile.Entities;
using Pile.Models;

namespace Pile.Services {
    public class BlogSettings : IBlogSettings {
    private IConfiguration _configuration { get; set; }
    private PileDbContext _context { get; set; }
    private const string PAGE_COUNT = "PageCount";
    private const string BASE_URL = "BaseUrl";
    private int _pageCount { get; set; }
    private string _baseUrl { get; set; }

    public BlogSettings(IConfiguration configuration, PileDbContext context) {
      _configuration = configuration;
      _context = context;
      _pageCount =  Int32.Parse(GetDefault(PAGE_COUNT));
      _baseUrl = GetDefault(BASE_URL);
    }

    private string GetDefault(string name) {
      string result = null;
      var idx = 0;
      while(result == null) {
        if(_configuration[$"Settings:{idx}:Name"] == name) {
          result = _configuration[$"Settings:{idx}:Default"];
        } else {
          idx++;
        }
      }
      return result;
    }

    private string GetDatabaseValue(string name) {
      var setting = _context.Settings
        .Where(p => p.Name == name).First();
      return setting != null ? setting.Value : null;
    }

    public void SetDatabaseValue(string name, string Value) {
      var setting = _context.Settings
        .Where(p => p.Name == name).First();
      if(setting != null) {
        setting.Value = Value;
        _context.SaveChanges();
      } else {
        setting = new Setting(name, Value);
        _context.Settings.Add(setting);
        _context.SaveChanges();
      }
    }

    public int GetPageCount() {
      var dbValue = GetDatabaseValue(PAGE_COUNT);
      return dbValue != null ? Int32.Parse(dbValue) : _pageCount;
    }

    public string GetBaseUrl() {
      var dbValue = GetDatabaseValue(BASE_URL);
      return dbValue != null ? dbValue : _baseUrl;
    }
  }
}
