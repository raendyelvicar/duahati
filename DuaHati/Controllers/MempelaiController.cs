using Microsoft.AspNetCore.Mvc;

namespace DuaHati.Controllers;

[Route("api/mempelai")]
public class MempelaiController : ControllerBase
{
    // GET
    public IActionResult Index()
    {
        return Ok("Hello World!");
    }
}