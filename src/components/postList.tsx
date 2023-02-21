import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = ({navigation}: any) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    const posts = response.data;
    setPosts(posts);
  };

  const toggleFavorite = (postId: number) => {
    const isFavorited = favoriteIds.includes(postId);
    if (isFavorited) {
      setFavoriteIds(favoriteIds.filter(id => id !== postId));
    } else {
      setFavoriteIds([...favoriteIds, postId]);
    }
  };

  const deletePost = (postId: number) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const removeNonFavorites = () => {
    setPosts(posts.filter(post => favoriteIds.includes(post.id)));
  };

  const isFavorited = (postId: number) => favoriteIds.includes(postId);
  const sortedPosts = [...posts];
  sortedPosts.sort((a, b) => {
    if (isFavorited(a.id) && !isFavorited(b.id)) {
      return -1;
    } else if (!isFavorited(a.id) && isFavorited(b.id)) {
      return 1;
    } else {
      return 0;
    }
  });
  const renderPost = ({item}: {item: Post}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PostDetails', {post: item})}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.thumbnail}>
          <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
            <Icon
              name={isFavorited(item.id) ? 'star' : 'star-o'}
              size={20}
              color={isFavorited(item.id) ? 'gold' : 'black'}
              style={styles.iconStar}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deletePost(item.id)}>
            <Icon
              name="trash"
              size={20}
              color="black"
              style={styles.iconTrash}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => removeNonFavorites()}>
          <Text style={styles.headerText}>Remove non-favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => fetchPosts()}>
          <Text style={styles.headerText}>Refresh</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={sortedPosts}
        renderItem={renderPost}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
  },
  title: {
    fontSize: 18,
  },
  iconStar: {
    marginRight: 8,
    marginTop: 8,
  },
  iconTrash: {
    marginTop: 8,
  },
  thumbnail: {
    flexDirection: 'row',
  },
  screen: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    padding: 16,
  },
});
export default PostList;
