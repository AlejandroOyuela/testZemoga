import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Post} from './../../types';

interface PostItemProps {
  post: Post;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  onDeletePost: () => void;
}

const PostItem = ({
  post,
  isFavorited,
  onToggleFavorite,
  onDeletePost,
}: PostItemProps) => {
  return (
    <TouchableOpacity onPress={onToggleFavorite}>
      <View style={styles.item}>
        <View style={styles.thumbnail}>
          <Text style={styles.title}>{post.title}</Text>
          {isFavorited && (
            <Icon name="star" size={18} color="gold" style={styles.iconStar} />
          )}
        </View>
        <View style={styles.thumbnail}>
          <Text style={styles.postedBy}>Posted by user {post.userId}</Text>
          <TouchableOpacity onPress={onDeletePost} style={styles.deletePost}>
            <Icon name="trash" size={16} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
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
    marginLeft: 8,
  },
  deletePost: {
    marginLeft: 8,
    padding: 4,
  },
  thumbnail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postedBy: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});
export default PostItem;
