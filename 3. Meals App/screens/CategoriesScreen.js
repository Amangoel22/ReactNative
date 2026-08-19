import { CATEGORIES } from "../data/dummy-data";
import { Text, View, FlatList } from "react-native";

function renderCategoryItem() {
    return
}

function CategoriesScreen() {
    <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={ } />
}

export default CategoriesScreen;