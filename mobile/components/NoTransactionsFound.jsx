import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";
import { useRouter } from "expo-router";

const NoTransactionsFound = () => {
    const router = useRouter();
    return (
        <View style={styles.emptyState}>
            <Ionicons name="receipt-outline" size={60} color={COLORS.textLight} style={styles.emptyStateIcon} />
            <Text style={styles.emptyStateTitle}>No transactions found</Text>
            <Text style={styles.emptyStateText}> Start tracking your finances by adding your first transaction</Text>
            <TouchableOpacity style={styles.emptyStateButton} onPress={() => router.push("/create")}>
                <Ionicons name="add-circle" size={18} color={COLORS.textLight} />
                <Text style={styles.emptyStateButtonText}>Add a transaction</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NoTransactionsFound;
