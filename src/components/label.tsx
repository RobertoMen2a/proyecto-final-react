import React from 'react';
import './label.css';

interface LabelProps {
  /**
   * Etiqueta o nombre que se visualizara
   */
  label: string;
  /**
   * Url para peticion
   */
  url?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({
  label,
  url,
  ...props
}: LabelProps) => {
  // const [count, setCount] = useState(0);
  return (
    <label {...props} >
      {label} - {url} - PRUEBA
    </label>
  );
};
