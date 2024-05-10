import { Image, StyleSheet, Text, View } from "react-native";
import { Cast } from "../../../core/models/cast.mode"

interface Props {
    cast: Cast;
}

export const CastActor = ({ cast }: Props) => {
    return (
        <View style={style.container}>
            <Image
                source={{ uri: cast.avatar }}
                style={{ width: 100, height: 150, borderRadius: 10 }}
            />

            <View style={style.actorInfo}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{cast.name}</Text>
                <Text style={{ fontSize: 15, opacity: 0.7 }}>{cast.character}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 100,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    }
})