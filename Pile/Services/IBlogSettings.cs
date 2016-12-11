using Microsoft.Extensions.Configuration;

namespace Pile.Services {
  public interface IBlogSettings {
    void SetDatabaseValue(string name, string Value);
    int GetPageCount();
    string GetBaseUrl();
  }
}
