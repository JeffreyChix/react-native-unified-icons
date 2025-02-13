# React Native Unified Icons

A unified interface for various icon sets in React Native, leveraging @expo/vector-icons (which internally uses react-native-vector-icons). This package provides type-safe icon selection across multiple icon libraries with a clean, consistent API.

## Installation

```bash
npm install react-native-unified-icons
# or
yarn add react-native-unified-icons
```

### Prerequisites

This package requires the following peer dependencies:

- react
- react-native
- @expo/vector-icons

Note: @expo/vector-icons internally uses react-native-vector-icons, so you'll get all the benefits of both libraries.

## Usage

### Basic Usage

```tsx
import { Icon } from 'react-native-unified-icons';

// Using AntDesign icons
<Icon
  select={{
    from: "antdesign",
    name: "stepforward"
  }}
  size={24}
  color="black"
/>

// Using Material icons
<Icon
  select={{
    from: "material-icons",
    name: "access-alarm"
  }}
  size={24}
  color="red"
/>
```

### With NativeWind

If you're using NativeWind for styling, you can utilize Tailwind classes for colors and other styles. This is particularly useful when working with custom themes:

```tsx
// Basic NativeWind usage
<Icon
  select={{
    from: "antdesign",
    name: "heart"
  }}
  className="!text-primary"  // Using your theme's primary color
  size={24}
/>

// Using important modifier for style precedence
<Icon
  select={{
    from: "material-icons",
    name: "favorite"
  }}
  className="!text-secondary"  // Forces the secondary color
  size={24}
/>

// Complex styling example
<Icon
  select={{
    from: "ionicons",
    name: "notifications"
  }}
  className="text-warning dark:text-warning-dark !font-bold"
  size={24}
/>
```

## Supported Props

| Prop        | Type                   | Required | Description                                                                                                                                 | Example                       |
| ----------- | ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| select.from | `IconType`             | Yes      | The icon library to use. Options: `'antdesign'`, `'material-icons'`, `'ionicons'`, `'feather'`, `'evilicons'`, `'entypo'`, `'fontawesome6'` | `from: "antdesign"`           |
| select.name | `IconNameType<T>`      | Yes      | The name of the icon from the selected library. Type-safe based on the chosen library.                                                      | `name: "stepforward"`         |
| size        | `number`               | No       | The size of the icon in pixels.                                                                                                             | `size={24}`                   |
| color       | `string`               | No       | The color of the icon. Can be any valid color string.                                                                                       | `color="red"`                 |
| className   | `string`               | No       | NativeWind classes for styling (if using NativeWind).                                                                                       | `className="text-primary"`    |
| style       | `StyleProp<TextStyle>` | No       | Additional React Native styles.                                                                                                             | `style={{ marginRight: 10 }}` |

All other TextProps from React Native's Text component are also supported, except for 'children'.

## Supported Icon Libraries

This package provides access to all icon sets available in @expo/vector-icons:

| Library           | Import Key          | Example Usage               | Description                              |
| ----------------- | ------------------- | --------------------------- | ---------------------------------------- |
| AntDesign         | `antdesign`         | `from: "antdesign"`         | Clean and modern icons from Ant Design   |
| Material Icons    | `material-icons`    | `from: "material-icons"`    | Google's Material Design icons           |
| Ionicons          | `ionicons`          | `from: "ionicons"`          | Premium icons for iOS, Android & Web     |
| Feather           | `feather`           | `from: "feather"`           | Simply beautiful open source icons       |
| EvilIcons         | `evilicons`         | `from: "evilicons"`         | Simple and clean icon set                |
| Entypo            | `entypo`            | `from: "entypo"`            | Over 250 carefully crafted premium icons |
| FontAwesome 6     | `fontawesome6`      | `from: "fontawesome6"`      | Latest version of FontAwesome icons      |
| FontAwesome 5     | `fontawesome5`      | `from: "fontawesome5"`      | FontAwesome 5 icon set                   |
| FontAwesome       | `fontawesome`       | `from: "fontawesome"`       | Original FontAwesome icon set            |
| Fontisto          | `fontisco`          | `from: "fontisco"`          | The iconic font and CSS toolkit          |
| Foundation        | `foundation`        | `from: "foundation"`        | Iconic fonts for Foundation Framework    |
| Octicons          | `octicons`          | `from: "octicons"`          | GitHub's icon set                        |
| Simple Line Icons | `simple-line-icons` | `from: "simple-line-icons"` | Simple and elegant line icons            |
| Zocial            | `zocial`            | `from: "zocial"`            | Social and brand icons                   |

## TypeScript Support

The package is written in TypeScript and provides full type safety. The icon names are typed based on the selected library, providing autocomplete and type checking in supported IDEs.

```typescript
// This will show type errors if the icon name doesn't exist in the selected library
<Icon
  select={{
    from: "antdesign",
    name: "invalid-icon-name", // TypeScript error
  }}
/>
```

## License

MIT
