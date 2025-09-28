using HUEVID_ArtGalleryForColorblind.Models;
using Microsoft.AspNetCore.Mvc;

namespace HUEVID_ArtGalleryForColorblind.Controllers
{
    public class GalleryController : Controller
    {
        GalleryViewModel gvm = new GalleryViewModel();
        private readonly ILogger<GalleryController> _logger;
        public GalleryController(ILogger<GalleryController> logger)
        {
            _logger = logger;
        }
        public IActionResult Gallery()
        {
            return View("Gallery", gvm);
        }
    }
}
