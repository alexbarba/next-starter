import { type } from "os";

type Form = {
  title: string;
  description: string;
  asModal: boolean;
  components: Component[];
};

enum ComponentType {
  Text = 'text',
  TextArea = 'textarea',
  Select = 'select',
  Checkbox = 'checkbox',
  Radio = 'radio',
  Separator = 'separator',
  Rate = 'rate',
  Grid = 'grid',
}

type TextField = {
  type: ComponentType.Text | ComponentType.TextArea;
  placeholder?: string;
  defaultValue?: string;
  min?: number;
  max?: number;
  pattern?: string;
  required?: boolean;
};

type SelectField = {
  type: ComponentType.Select;
  options: string[];
  multiple?: boolean;
  required?: boolean;
};

type CheckboxField = {
  type: ComponentType.Checkbox;
  options: string[];
  required?: boolean;
};

type RadioField = {
  type: ComponentType.Radio;
  options: string[];
  required?: boolean;
};

type Separator = {
  type: ComponentType.Separator;
};

type RateField = {
  type: ComponentType.Rate;
  min?: number;
  max?: number;
  icon: 'star' | 'heart' | 'smile';
  required?: boolean;
};

type Grid = {
  type: ComponentType.Grid;
  columns: number;
  rows: number;
  components: Component[];
};

type Component = {
  name: string;
  label?: string;
  element: Grid | TextField | SelectField | CheckboxField | RadioField | Separator | RateField;
};