import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';

const Lista = ({data}) => {
  const [feed] = useState(data);
  const [likes, setLikes] = useState(data.likers);
  const [likeada, setLikeada] = useState(data.likeada);

  function mostraLikes(likers) {
    if (likers <= 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {likers} {likers > 1 ? 'Curtidas' : 'Curtida'}
      </Text>
    );
  }

  function like() {
    if (likeada === true) {
      setLikeada(false);
      setLikes(likes - 1);
    } else {
      setLikeada(true);
      setLikes(likes + 1);
    }
  }

  function liked(liked) {
    return liked
      ? require('../../img/likeada.png')
      : require('../../img/like.png');
  }

  return (
    <>
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          {feed.imgperfil ? (
            <>
              <Image source={{uri: feed.imgperfil}} style={styles.fotoPerfil} />
              <Text style={styles.nomeUsuario}>{feed.nome}</Text>
            </>
          ) : (
            <ActivityIndicator size="large" color="blue" />
          )}
        </View>

        {feed.imgpublicacao ? (
          <Image
            resizeMode="cover"
            style={styles.fotoPublicacao}
            source={{uri: feed.imgpublicacao}}
          />
        ) : (
          <ActivityIndicator size="large" color="blue" />
        )}

        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={like}>
            <Image style={styles.iconeLike} source={liked(likeada)} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSend}>
            <Image
              style={styles.iconeLike}
              source={require('../../img/send.png')}
            />
          </TouchableOpacity>
        </View>

        {mostraLikes(likes)}

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{feed.nome}</Text>
          <Text style={styles.descRodape}>{feed.descricao} </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  areaFeed: {
    flex: 1,
  },
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000',
    paddingLeft: 10,
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike: {
    height: 33,
    width: 33,
  },
  btnSend: {
    paddingLeft: 10,
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descRodape: {
    paddingLeft: 10,
    fontSize: 15,
    color: '#000',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 10,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Lista;
