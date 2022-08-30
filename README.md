# Conteg React web template

## 👨🏻‍💻 Local development

1. Install dependencies using `yarn install`.
2. Install Husky using `yarn run husky install`.
3. Run the app using `yarn dev`.

## Testing

1. Run tests using `npx cypress open`.

## 📕 Storybook

1. Run Storybook using `yarn storybook`

Stories can be saved anywhere in the folder structure without need of any further configuration of Storybook.
Storybook will automatically grab any file with `*.stories.ts|tsx` in its name.

### Storybook crash course

#### Writing story - MDX:

```markdown
<!-- Necessary imports -->

import { Canvas, Meta, Story } from '@storybook/addon-docs';

<!-- Necessary imports -->

<!-- Component imports -->

import ComponentName from './Component';
import ContextProvider from './Context'; <!-- When using context etc. -->

<!-- Component imports -->

<!-- Stories set up -->
<!-- More detailed comments are in TSX section - everything applies to MDX as well. -->
<Meta
  title="Section/Component name"
  component={ComponentName}
  argTypes={{
    argumentName: {
      description: 'Some desc.',
      table: {
        type: {
          summary: 'Short sum what is it good for.',
          detail: 'Detailed description in onclick pop up.',
        },
      },
    },
  }}
  decorators={[
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ]}
/>

<!-- Create "template" component to show SB how args map to component. -->

export const Template = (args) => <ComponentName {...args} />;

** --- Here you can write docs using markdown --- **

<!-- Lets create story without args: -->
<Canvas>
  <!--          This 👇 is the name of story shown in Storybook UI. -->
  <Story name="Component Name">{Template.bind({})}</Story>
</Canvas>

** --- You can write some info to every story --- **

<!-- Now lets create stories for different args: -->
<Canvas>
  <Story
    name="Component with args"
    args={{
      argName: 'value',
      anotherArg: 'value',
    }}>
    {Template.bind({})}
  </Story>
</Canvas>
```

---

#### Writing story - TSX:

```typescript
// Necessary imports
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
// Necessary imports

// Component imports
import ComponentName from './Component';
import ContextProvider from './Context'; // When using context etc.
// Component imports

// Stories set up
export default {
  // Title is optional -> if omitted SB will use filename (component-name.tsx -> component-name)
  //   This 👇 will create section in Storybook UI (components, pages etc.).
  title: 'Section/Component name',
  component: ComponentName,

  // argTypes provides additional info about component's arguments.
  // This info will be show in "Docs" section of Storybook.
  // Also it will be used in "Controls" tab of interactive preview.
  // Writing additional info is optional.
  // More here: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // real name of argument!
    argumentName: {
      description: 'Some desc.',
      table: {
        type: {
          summary: 'Short sum what is it good for.',
          detail: 'Detailed description in onclick pop up.',
        },
      },
    },
  },

  // Decorators are used to wrap component in additional markup.
  // You can stack any number of decorators (tested on 7).
  // !! Decorators are applied from bottom to top (from the end of decorators array).
  decorators: [
    // In this case context provider
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
    // Here some div with styles
    (Story) => (
      <div style={{ color: 'blue' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ComponentName>;

// Creating stories:
// If component does not have any args:
//            This 👇 is the name of story shown in Storybook UI.
export const ComponentWithoutArgs: ComponentStory<
  typeof ComponentName
> = () => <ComponentName />;

// If component has args:
// Create "template" component to show SB how args map to component.
const Template: ComponentStory<typeof ComponentName> = (args) => (
  <ComponentName {...args} />
);

// Now lets create stories for different args:
//            This 👇 is the name of story shown in Storybook UI.
export const ComponentWithArgs1 = Template.bind({});
ComponentWithArgs1.args = {
  label: 'Some meaningful label',
  size: 'xl',
};

// Second one with diff. args
export const ComponentWithArgs2 = Template.bind({});
ComponentWithArgs2.args = {
  label: 'Some other label',
  size: 's',
};

// Stories created above will be shown in UI as follows:
// - Component name -> taken from label:
//    |- ComponentWithArgs1
//    |- ComponentWithArgs2
```

Docs: https://storybook.js.org/docs/react/writing-stories/introduction
