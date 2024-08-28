// color palettes from https://colorswall.com/

const colorPalettes = {
  materialDesign: {
    name: 'Material Design',
    colors: [
      { name: 'Red', code: '#f44336' },
      { name: 'Pink', code: '#e81e63' },
      { name: 'Purple', code: '#9c27b0' },
      { name: 'Deep Purple', code: '#673ab7' },
      { name: 'Indigo', code: '#3f51b5' },
      { name: 'Blue', code: '#2196f3' },
      { name: 'Light Blue', code: '#03a9f4' },
      { name: 'Cyan', code: '#00bcd4' },
      { name: 'Teal', code: '#009688' },
      { name: 'Green', code: '#4caf50' },
      { name: 'Light Green', code: '#8bc34a' },
      { name: 'Lime', code: '#cddc39' },
      { name: 'Yellow', code: '#ffeb3b' },
      { name: 'Amber', code: '#ffc107' },
      { name: 'Orange', code: '#ff9800' },
      { name: 'Deep Orange', code: '#ff5722' },
      { name: 'Brown', code: '#795548' },
      { name: 'Gray', code: '#9e9e9e' },
      { name: 'Blue Gray', code: '#607d8b' },
    ],
  },
  minecraftColors: {
    name: 'Minecraft Colors',
    colors: [
      { name: 'White', code: '#f9ffff' },
      { name: 'Light Gray', code: '#9c9d97' },
      { name: 'Gray', code: '#474f52' },
      { name: 'Black', code: '#1d1c21' },
      { name: 'Yellow', code: '#ffd83d' },
      { name: 'Orange', code: '#f9801d' },
      { name: 'Red', code: '#b02e26' },
      { name: 'Brown', code: '#825432' },
      { name: 'Lime', code: '#80c71f' },
      { name: 'Green', code: '#5d7c15' },
      { name: 'Light Blue', code: '#3ab3da' },
      { name: 'Cyan', code: '#169c9d' },
      { name: 'Blue', code: '#3c44a9' },
      { name: 'Pink', code: '#f38caa' },
      { name: 'Magenta', code: '#c64fbd' },
      { name: 'Purple', code: '#8932b7' },
    ],
  },
  humanSkin: {
    name: 'Human Skin',
    colors: [
      { name: 'Skin Tone 1', code: '#c58c85' },
      { name: 'Skin Tone 2', code: '#ecbcb4' },
      { name: 'Skin Tone 3', code: '#d1a3a4' },
      { name: 'Skin Tone 4', code: '#a1665e' },
      { name: 'Skin Tone 5', code: '#503335' },
      { name: 'Skin Tone 6', code: '#592f2a' },
    ],
  },
  pastel: {
    name: 'Pastel',
    colors: [
      { name: 'Conditioner', code: '#ffffcc' },
      { name: 'Peach Orange', code: '#ffcc99' },
      { name: 'Lusty-Gallant', code: '#ffcccc' },
      { name: 'Himalayan Balsam', code: '#ff99cc' },
      { name: 'Sugar Chic', code: '#ffccff' },
      { name: 'Lilás', code: '#cc99ff' },
      { name: 'Lavender Blue', code: '#ccccff' },
      { name: 'Apocyan', code: '#99ccff' },
      { name: 'Dawn Departs', code: '#ccffff' },
      { name: 'Unnamed', code: '#99ffcc' },
      { name: 'Distilled Moss', code: '#ccffcc' },
      { name: 'Unnamed', code: '#ccff99' },
    ],
  },
  red: {
    name: 'Red',
    colors: [
      { name: 'red-lighten-5', code: '#ffebee' },
      { name: 'red-lighten-4', code: '#ffcdd2' },
      { name: 'red-lighten-3', code: '#ef9a9a' },
      { name: 'red-lighten-2', code: '#e57373' },
      { name: 'red-lighten-1', code: '#ef5350' },
      { name: 'red', code: '#f44336' },
      { name: 'red-darken-1', code: '#e53935' },
      { name: 'red-darken-2', code: '#d32f2f' },
      { name: 'red-darken-3', code: '#c62828' },
      { name: 'red-darken-4', code: '#b71c1c' },
      { name: 'red-accent-1', code: '#ff8a80' },
      { name: 'red-accent-2', code: '#ff5252' },
      { name: 'red-accent-3', code: '#ff1744' },
      { name: 'red-accent-4', code: '#d50000' },
    ],
  },
  pink: {
    name: 'Pink',
    colors: [
      { name: 'pink lighten-5', code: '#fce4ec' },
      { name: 'pink lighten-4', code: '#f8bbd0' },
      { name: 'pink lighten-3', code: '#f48fb1' },
      { name: 'pink lighten-2', code: '#f06292' },
      { name: 'pink lighten-1', code: '#ec407a' },
      { name: 'pink', code: '#e91e63' },
      { name: 'pink darken-1', code: '#d81b60' },
      { name: 'pink darken-2', code: '#c2185b' },
      { name: 'pink darken-3', code: '#ad1457' },
      { name: 'pink darken-4', code: '#880e4f' },
      { name: 'pink accent-1', code: '#ff80ab' },
      { name: 'pink accent-2', code: '#ff4081' },
      { name: 'pink accent-3', code: '#f50057' },
      { name: 'pink accent-4', code: '#c51162' },
    ],
  },
  purple: {
    name: 'Purple',
    colors: [
      { name: 'purple lighten-5', code: '#f3e5f5' },
      { name: 'purple lighten-4', code: '#e1bee7' },
      { name: 'purple lighten-3', code: '#ce93d8' },
      { name: 'purple lighten-2', code: '#ba68c8' },
      { name: 'purple lighten-1', code: '#ab47bc' },
      { name: 'purple', code: '#9c27b0' },
      { name: 'purple darken-1', code: '#8e24aa' },
      { name: 'purple darken-2', code: '#7b1fa2' },
      { name: 'purple darken-3', code: '#6a1b9a' },
      { name: 'purple darken-4', code: '#4a148c' },
      { name: 'purple accent-1', code: '#ea80fc' },
      { name: 'purple accent-2', code: '#e040fb' },
      { name: 'purple accent-3', code: '#d500f9' },
      { name: 'purple accent-4', code: '#aa00ff' },
    ],
  },
  deepPurple: {
    name: 'Deep Purple',
    colors: [
      { name: 'deep-purple lighten-5', code: '#ede7f6' },
      { name: 'deep-purple lighten-4', code: '#d1c4e9' },
      { name: 'deep-purple lighten-3', code: '#b39ddb' },
      { name: 'deep-purple lighten-2', code: '#9575cd' },
      { name: 'deep-purple lighten-1', code: '#7e57c2' },
      { name: 'deep-purple', code: '#673ab7' },
      { name: 'deep-purple darken-1', code: '#5e35b1' },
      { name: 'deep-purple darken-2', code: '#512da8' },
      { name: 'deep-purple darken-3', code: '#4527a0' },
      { name: 'deep-purple darken-4', code: '#311b92' },
      { name: 'deep-purple accent-1', code: '#b388ff' },
      { name: 'deep-purple accent-2', code: '#7c4dff' },
      { name: 'deep-purple accent-3', code: '#651fff' },
      { name: 'deep-purple accent-4', code: '#6200ea' },
    ],
  },
  indigo: {
    name: 'Indigo',
    colors: [
      { name: 'indigo lighten-4', code: '#e8eaf6' },
      { name: 'indigo lighten-3', code: '#c5cae9' },
      { name: 'indigo lighten-2', code: '#9fa8da' },
      { name: 'indigo lighten-1', code: '#7986cb' },
      { name: 'Indigo', code: '#5c6bc0' },
      { name: 'indigo', code: '#3f51b5' },
      { name: 'indigo darken-1', code: '#3949ab' },
      { name: 'indigo darken-2', code: '#303f9f' },
      { name: 'indigo darken-3', code: '#283593' },
      { name: 'indigo darken-4', code: '#1a237e' },
      { name: 'indigo accent-1', code: '#8c9eff' },
      { name: 'indigo accent-4', code: '#304ffe' },
      { name: 'indigo accent-3', code: '#3d5afe' },
      { name: 'indigo accent-2', code: '#536dfe' },
    ],
  },
  blue: {
    name: 'Blue',
    colors: [
      { name: 'blue lighten-5', code: '#e3f2fd' },
      { name: 'blue lighten-4', code: '#bbdefb' },
      { name: 'blue lighten-3', code: '#90caf9' },
      { name: 'blue lighten-2', code: '#64b5f6' },
      { name: 'blue lighten-1', code: '#42a5f5' },
      { name: 'blue', code: '#2196f3' },
      { name: 'blue darken-1', code: '#1e88e5' },
      { name: 'blue darken-2', code: '#1976d2' },
      { name: 'blue darken-3', code: '#1565c0' },
      { name: 'blue darken-4', code: '#0d47a1' },
      { name: 'blue accent-1', code: '#82b1ff' },
      { name: 'blue accent-2', code: '#448aff' },
      { name: 'blue accent-3', code: '#2979ff' },
      { name: 'blue accent-4', code: '#2962ff' },
    ],
  },
  lightBlue: {
    name: 'Light Blue',
    colors: [
      { name: 'light-blue lighten-5', code: '#e1f5fe' },
      { name: 'light-blue lighten-4', code: '#b3e5fc' },
      { name: 'light-blue lighten-3', code: '#81d4fa' },
      { name: 'light-blue lighten-2', code: '#4fc3f7' },
      { name: 'light-blue lighten-1', code: '#29b6f6' },
      { name: 'light-blue', code: '#03a9f4' },
      { name: 'light-blue darken-1', code: '#039be5' },
      { name: 'light-blue darken-2', code: '#0288d1' },
      { name: 'light-blue darken-3', code: '#0277bd' },
      { name: 'light-blue darken-4', code: '#01579b' },
      { name: 'light-blue accent-1', code: '#80d8ff' },
      { name: 'light-blue accent-2', code: '#40c4ff' },
      { name: 'light-blue accent-3', code: '#00b0ff' },
      { name: 'light-blue accent-4', code: '#0091ea' },
    ],
  },
  cyan: {
    name: 'Cyan',
    colors: [
      { name: 'cyan lighten-5', code: '#e0f7fa' },
      { name: 'cyan lighten-4', code: '#b2ebf2' },
      { name: 'cyan lighten-3', code: '#80deea' },
      { name: 'cyan lighten-2', code: '#4dd0e1' },
      { name: 'cyan lighten-1', code: '#26c6da' },
      { name: 'cyan', code: '#00bcd4' },
      { name: 'cyan darken-1', code: '#00acc1' },
      { name: 'cyan darken-2', code: '#0097a7' },
      { name: 'cyan darken-3', code: '#00838f' },
      { name: 'cyan darken-4', code: '#006064' },
      { name: 'cyan accent-1', code: '#84ffff' },
      { name: 'cyan accent-2', code: '#18ffff' },
      { name: 'cyan accent-3', code: '#00e5ff' },
      { name: 'cyan accent-4', code: '#00b8d4' },
    ],
  },
  teal: {
    name: 'Teal',
    colors: [
      { name: 'teal lighten-5', code: '#e0f2f1' },
      { name: 'teal lighten-4', code: '#b2dfdb' },
      { name: 'teal lighten-3', code: '#80cbc4' },
      { name: 'teal lighten-2', code: '#4db6ac' },
      { name: 'teal lighten-1', code: '#26a69a' },
      { name: 'teal', code: '#009688' },
      { name: 'teal darken-1', code: '#00897b' },
      { name: 'teal darken-2', code: '#00796b' },
      { name: 'teal darken-3', code: '#00695c' },
      { name: 'teal darken-4', code: '#004d40' },
      { name: 'teal accent-1', code: '#a7ffeb' },
      { name: 'teal accent-2', code: '#64ffda' },
      { name: 'teal accent-3', code: '#1de9b6' },
      { name: 'teal accent-4', code: '#00bfa5' },
    ],
  },
  green: {
    name: 'Green',
    colors: [
      { name: 'green lighten-5', code: '#e8f5e9' },
      { name: 'green lighten-4', code: '#c8e6c9' },
      { name: 'green lighten-3', code: '#a5d6a7' },
      { name: 'green lighten-2', code: '#81c784' },
      { name: 'green lighten-1', code: '#66bb6a' },
      { name: 'green', code: '#4caf50' },
      { name: 'green darken-1', code: '#43a047' },
      { name: 'green darken-2', code: '#388e3c' },
      { name: 'green darken-3', code: '#2e7d32' },
      { name: 'green darken-4', code: '#1b5e20' },
      { name: 'green accent-1', code: '#b9f6ca' },
      { name: 'green accent-2', code: '#69f0ae' },
      { name: 'green accent-3', code: '#00e676' },
      { name: 'green accent-4', code: '#00c853' },
    ],
  },
  lightGreen: {
    name: 'Light Green',
    colors: [
      { name: 'light-green lighten-5', code: '#f1f8e9' },
      { name: 'light-green lighten-4', code: '#dcedc8' },
      { name: 'light-green lighten-3', code: '#c5e1a5' },
      { name: 'light-green lighten-2', code: '#aed581' },
      { name: 'light-green lighten-1', code: '#9ccc65' },
      { name: 'light-green', code: '#8bc34a' },
      { name: 'light-green darken-1', code: '#7cb342' },
      { name: 'light-green darken-2', code: '#689f38' },
      { name: 'light-green darken-3', code: '#558b2f' },
      { name: 'light-green darken-4', code: '#33691e' },
      { name: 'light-green accent-1', code: '#ccff90' },
      { name: 'light-green accent-2', code: '#b2ff59' },
      { name: 'light-green accent-3', code: '#76ff03' },
      { name: 'light-green accent-4', code: '#64dd17' },
    ],
  },
  lime: {
    name: 'Lime',
    colors: [
      { name: 'lime lighten-5', code: '#f9fbe7' },
      { name: 'lime lighten-4', code: '#f0f4c3' },
      { name: 'lime lighten-3', code: '#e6ee9c' },
      { name: 'lime lighten-2', code: '#dce775' },
      { name: 'lime lighten-1', code: '#d4e157' },
      { name: 'lime', code: '#cddc39' },
      { name: 'lime darken-1', code: '#c0ca33' },
      { name: 'lime darken-2', code: '#afb42b' },
      { name: 'lime darken-3', code: '#9e9d24' },
      { name: 'lime darken-4', code: '#827717' },
      { name: 'lime accent-1', code: '#f4ff81' },
      { name: 'lime accent-2', code: '#eeff41' },
      { name: 'lime accent-3', code: '#c6ff00' },
      { name: 'lime accent-4', code: '#aeea00' },
    ],
  },
  yellow: {
    name: 'Yellow',
    colors: [
      { name: 'yellow lighten-5', code: '#fffde7' },
      { name: 'yellow lighten-4', code: '#fff9c4' },
      { name: 'yellow lighten-3', code: '#fff59d' },
      { name: 'yellow lighten-2', code: '#fff176' },
      { name: 'yellow lighten-1', code: '#ffee58' },
      { name: 'yellow', code: '#ffeb3b' },
      { name: 'yellow darken-1', code: '#fdd835' },
      { name: 'yellow darken-2', code: '#fbc02d' },
      { name: 'yellow darken-3', code: '#f9a825' },
      { name: 'yellow darken-4', code: '#f57f17' },
      { name: 'yellow accent-1', code: '#ffff8d' },
      { name: 'yellow accent-2', code: '#ffff00' },
      { name: 'yellow accent-3', code: '#ffea00' },
      { name: 'yellow accent-4', code: '#ffd600' },
    ],
  },
  amber: {
    name: 'Amber',
    colors: [
      { name: 'amber lighten-5', code: '#fff8e1' },
      { name: 'amber lighten-4', code: '#ffecb3' },
      { name: 'amber lighten-3', code: '#ffe082' },
      { name: 'amber lighten-2', code: '#ffd54f' },
      { name: 'amber lighten-1', code: '#ffca28' },
      { name: 'amber', code: '#ffc107' },
      { name: 'amber darken-1', code: '#ffb300' },
      { name: 'amber darken-2', code: '#ffa000' },
      { name: 'amber darken-3', code: '#ff8f00' },
      { name: 'amber darken-4', code: '#ff6f00' },
      { name: 'amber accent-1', code: '#ffe57f' },
      { name: 'amber accent-2', code: '#ffd740' },
      { name: 'amber accent-3', code: '#ffc400' },
      { name: 'amber accent-4', code: '#ffab00' },
    ],
  },
  orange: {
    name: 'Orange',
    colors: [
      { name: 'orange lighten-5', code: '#fff3e0' },
      { name: 'orange lighten-4', code: '#ffe0b2' },
      { name: 'orange lighten-3', code: '#ffcc80' },
      { name: 'orange lighten-2', code: '#ffb74d' },
      { name: 'orange lighten-1', code: '#ffa726' },
      { name: 'orange', code: '#ff9800' },
      { name: 'orange darken-1', code: '#fb8c00' },
      { name: 'orange darken-2', code: '#f57c00' },
      { name: 'orange darken-3', code: '#ef6c00' },
      { name: 'orange darken-4', code: '#e65100' },
      { name: 'orange accent-1', code: '#ffd180' },
      { name: 'orange accent-2', code: '#ffab40' },
      { name: 'orange accent-3', code: '#ff9100' },
      { name: 'orange accent-4', code: '#ff6d00' },
    ],
  },
  deepOrange: {
    name: 'Deep Orange',
    colors: [
      { name: 'deep-orange lighten-5', code: '#fbe9e7' },
      { name: 'deep-orange lighten-4', code: '#ffccbc' },
      { name: 'deep-orange lighten-3', code: '#ffab91' },
      { name: 'deep-orange lighten-2', code: '#ff8a65' },
      { name: 'deep-orange lighten-1', code: '#ff7043' },
      { name: 'deep-orange', code: '#ff5722' },
      { name: 'deep-orange darken-1', code: '#f4511e' },
      { name: 'deep-orange darken-2', code: '#e64a19' },
      { name: 'deep-orange darken-3', code: '#d84315' },
      { name: 'deep-orange darken-4', code: '#bf360c' },
      { name: 'deep-orange accent-1', code: '#ff9e80' },
      { name: 'deep-orange accent-2', code: '#ff6e40' },
      { name: 'deep-orange accent-3', code: '#ff3d00' },
      { name: 'deep-orange accent-4', code: '#dd2c00' },
    ],
  },
  brown: {
    name: 'Brown',
    colors: [
      { name: 'brown lighten-5', code: '#efebe9' },
      { name: 'brown lighten-4', code: '#d7ccc8' },
      { name: 'brown lighten-3', code: '#bcaaa4' },
      { name: 'brown lighten-2', code: '#a1887f' },
      { name: 'brown lighten-1', code: '#8d6e63' },
      { name: 'brown', code: '#795548' },
      { name: 'brown darken-1', code: '#6d4c41' },
      { name: 'brown darken-2', code: '#5d4037' },
      { name: 'brown darken-3', code: '#4e342e' },
      { name: 'brown darken-4', code: '#3e2723' },
    ],
  },
  grey: {
    name: 'Grey',
    colors: [
      { name: 'grey lighten-5', code: '#fafafa' },
      { name: 'grey lighten-4', code: '#f5f5f5' },
      { name: 'grey lighten-3', code: '#eeeeee' },
      { name: 'grey lighten-2', code: '#e0e0e0' },
      { name: 'grey lighten-1', code: '#bdbdbd' },
      { name: 'grey', code: '#9e9e9e' },
      { name: 'grey darken-1', code: '#757575' },
      { name: 'grey darken-2', code: '#616161' },
      { name: 'grey darken-3', code: '#424242' },
      { name: 'grey darken-4', code: '#212121' },
    ],
  },
  blueGrey: {
    name: 'Blue Grey',
    colors: [
      { name: 'blue-grey darken-4', code: '#263238' },
      { name: 'blue-grey darken-3', code: '#37474f' },
      { name: 'blue-grey darken-2', code: '#455a64' },
      { name: 'blue-grey darken-1', code: '#546e7a' },
      { name: 'blue-grey', code: '#607d8b' },
      { name: 'blue-grey lighten-1', code: '#78909c' },
      { name: 'blue-grey lighten-2', code: '#90a4ae' },
      { name: 'blue-grey lighten-3', code: '#b0bec5' },
      { name: 'blue-grey lighten-4', code: '#cfd8dc' },
      { name: 'blue-grey lighten-5', code: '#eceff1' },
    ],
  },
};

export type PaletteNameCamelCase = keyof typeof colorPalettes;
export type PaletteName = (typeof colorPalettes)[PaletteNameCamelCase]['name'];

export default colorPalettes;
