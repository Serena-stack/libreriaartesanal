import { Box, Flex } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
return (
    <Flex
    alignItems={"center"}
    justifyContent={"center"}
    height={"90vh"}
    fontSize={"2rem"}
    >
    <ul>
        {products.map((product) => {
        return (
            <li key={product.id}>
            {product.name}, {product.price}
            </li>
        );
        })}
    </ul>
    </Flex>
);
};

export default ItemListContainer;