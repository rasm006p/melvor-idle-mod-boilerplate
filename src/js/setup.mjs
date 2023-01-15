// Modules
// You can import script modules and have full type completion
import Greeter from './Greeter/Greeter.mjs';

// Data
// Game data for registration
import ModData from '../data/data.json';

// Styles
// Will automatically load your styles upon loading the mod
import '../css/styles.css';

// Images
// To bundle your mod's icon
import '../img/icon.png';
// Reference images using `ctx.getResourceUrl`
import LargeIcon from '../img/icon_large.png';

/**
 * @param {ModContext} ctx 
 */
export async function setup(ctx) {
  await ctx.gameData.addPackage(ModData);

  ctx.onInterfaceReady(() => {
    document.addEventListener("click", (e) => {
      console.log(e.target)
      if (e.target.parentNode.id === "sidebar") {
        document.getElementById("sidebar").classList.toggle("closed");
        document.getElementById("sidebar").classList.toggle("open");
      }
    });
    document.getElementById("sidebar").classList.add("modded");
    document.getElementById("sidebar").classList.add("closed");
    const html = document.createElement('div');
    SwalLocale.fire({
      iconHtml: `<img class="modBoilerplate__logo-img" src="${ctx.getResourceUrl(LargeIcon)}" />`,
      title: 'Mod Boilerplate',
      html
    });
    ui.create(Greeter({ name: 'Melvor' }), html);
  });
}
