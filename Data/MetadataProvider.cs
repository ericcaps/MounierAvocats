using System.Collections.Generic;

namespace MounierAvocats.Data
{
    public class MetadataProvider
    {
        public Dictionary<string, MetadataValue> RouteDetailMapping { get; set; } = new()
        {
            {
                "/",
                new()
                {
                    Title = "Accueil",
                    Description = "Yves Mounier Avocat Bordeaux Droite des affaires droit des sociétés droit du travail"
                }
            },
            {
                "/cabinet",
                new()
                {
                    Title = "Le Cabinet",
                    Description = "Email us: dotnetprotech@gmail.com - The DotNetPro team."
                }
            }
        };
    }
}
