import * as C from "@chakra-ui/react";

const FormAccount = () => {
  return (
    <C.VStack spacing={5}>
        <C.Input type="email" placeholder="E-mail" bordercolor="blue.700" />
        <C.Input
            type="email"
            placeholder="Confimer seu E-mail"
            bordecolor="blue.700"
        />
        <C.Input type="password" placeholder="Senha" bordercolor="blue.700" />
    </C.VStack>
  );
};

export default FormAccount;