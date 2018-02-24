import {MouseEvent} from 'react';

export interface ButtonProps {
  label: string;
  onClick: (event: MouseEvent<HTMLInputElement>) => void;
}
