/***  Generated file, do not change.  */
import { MenuComponent } from './menu/menu';
import { loading_PhonePortrait } from '../pages/loading/PhonePortrait/loading';
import { takephoto_PhonePortrait } from '../pages/takephoto/PhonePortrait/takephoto';
import { readme_PhonePortrait } from '../pages/readme/PhonePortrait/readme';
export class Screens {
  static declarations = [
    MenuComponent,
    loading_PhonePortrait,
    takephoto_PhonePortrait,
    readme_PhonePortrait
  ];
  static mapping = {
    'loading': {
      PhonePortrait: loading_PhonePortrait
    },
    'takephoto': {
      PhonePortrait: takephoto_PhonePortrait
    },
    'readme': {
      PhonePortrait: readme_PhonePortrait
    }
  }
}