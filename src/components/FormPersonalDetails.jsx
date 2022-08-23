import * as C from "@chakra-ui/react";

const FormPersonalDetails = () => {
  return (
    <C.VStack spacing={5}>
       <C.Input placeholder="Nome" bordercolor="blue.700" />
       <C.Input placeholder="CPF" bordercolor="blue.700" />
       <C.Input placeholder="Celular" bordercolor="blue.700" />
    </C.VStack>
  );
};

export default FormPersonalDetails;