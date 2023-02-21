import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostDetails = ({route}: any) => {
  const {post} = route.params;
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`,
      );
      const comments = response.data;
      setComments(comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.bodyText}>{post.body}</Text>
      <Text style={styles.authorText}>Author</Text>
      <Text style={styles.idText}>User ID: {post.userId}</Text>
      <Text style={styles.commentsText}>Comments</Text>
      <FlatList
        data={comments}
        renderItem={({item}) => <CommentItem comment={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({comment}: CommentItemProps) => (
  <View style={styles.commentsContainer}>
    <Text style={styles.commentsText}>{comment.name}</Text>
    <Text style={styles.commentsEmail}>{comment.email}</Text>
    <Text style={styles.commentBody}>{comment.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 16,
  },
  authorText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  idText: {
    fontSize: 16,
    marginBottom: 16,
  },
  commentsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  commentsContainer: {
    marginBottom: 16,
  },
  commentsEmail: {
    fontSize: 14,
  },
  commentBody: {
    fontSize: 16,
    marginTop: 8,
  },
});
export default PostDetails;
