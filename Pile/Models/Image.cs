using System;
using System.Collections.Generic;
using System.Linq;
using Pile.Entities;

namespace Pile.Models
{
    public class Image {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public byte[] Content { get; set; }

        // public static List<Image> List(int id) {
        //     using (var context = new PileDbContext()) {
        //         return context.Images.ToList();
        //     }
        // }

        // public static Image Find(int id) {
        //     using (var context = new PileDbContext()) {
        //         return context.Images
        //             .Single(i => i.Id == id);
        //     }
        // }

        // public static Image Add(Image image) {
        //     using (var context = new PileDbContext()) {
        //         var change = context.Images.Add(image);
        //         context.SaveChanges();
        //         return image;
        //     }
        // }

        // public static Image Update(Image image) {
        //     using (var context = new PileDbContext()) {
        //         var change = context.Images.Update(image);
        //         context.SaveChanges();
        //         return image;
        //     }
        // }

        // public static bool Delete(Image image) {
        //     using (var context = new PileDbContext()) {
        //         var change = context.Images.Remove(image);
        //         context.SaveChanges();
        //         return true;
        //     }

        // }
    }
}
