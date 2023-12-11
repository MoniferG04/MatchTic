import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';


export function Search(props) {

  const filter = createFilterOptions();
  const datos = props.data || "";  // Establecer data como cadena vacía si es nula o indefinida
  const mensaje = props.mensaje;
  const [value, setValue] = React.useState(null);
  const [id, setId] = React.useState(null);

  let datosConKey = [];
  if (Array.isArray(datos)) {
    datosConKey = datos.map((item, index) => ({
      ...item,
      key: index,
    }));
  }

  React.useEffect(() => {
    // Llamar a la función de devolución de llamada cuando 'id' cambie
    if (props.onIdChange) {
      props.onIdChange(id);
    }
  }, [id, props.onIdChange]);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (newValue && newValue.id) {
          // Aquí obtienes el ID del elemento seleccionado
          setId(newValue.id);
          setValue(newValue);
        } else if (typeof newValue === 'string') {
          setValue({
            nombre: newValue,
            id: -1,
          });
          setId(-1);
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            nombre: newValue.inputValue,
            id: -1,
          });
          setId(-1);
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.nombre);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            nombre: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={datosConKey}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.nombre;
      }}
      renderOption={(props, option) => <li key={option.key} {...props}>{option.nombre}</li>}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label={mensaje} />
      )}
    />
  );
}