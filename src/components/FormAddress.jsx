import * as C from "@chakra-ui/react";

const FormAddress = () => {
  return (
    <C.VStack spacing={5}>
       <C.Input placeholder="Cidade, UF" bordercolor="blue.700" />
       <C.Input placeholder="Rua" bordercolor="blue.700" />
       <C.Input placeholder="CEP" bordercolor="blue.700" />
    </C.VStack>
  );
};

export default FormAddress;