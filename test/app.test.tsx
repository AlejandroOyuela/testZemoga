import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import axios from 'axios';
import PostList from '../src/components/postList';
import '@testing-library/jest-dom/extend-expect';

import PostDetails from '../src/components/postDetails';

jest.mock('axios');

const mockedPosts = [
  {
    id: 1,
    title: 'First post',
    body: 'Body of first post',
    userId: 1,
  },
  {
    id: 2,
    title: 'Second post',
    body: 'Body of second post',
    userId: 2,
  },
];

describe('PostList', () => {
  beforeEach(() => {
    (axios.get as jest.Mock).mockResolvedValue({data: mockedPosts});
  });

  it('should fetch and display posts on mount', async () => {
    const {getByText} = render(<PostList />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(getByText('First post')).toBeDefined();
    expect(getByText('Second post')).toBeDefined();
  });

  it('should allow toggling favorites', async () => {
    const {getByTestId} = render(<PostList />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    const firstPost = mockedPosts[0];
    const starIcon = getByTestId(`star-icon-${firstPost.id}`);
    fireEvent.press(starIcon);
    expect(starIcon.props.name).toBe('star');
    fireEvent.press(starIcon);
    expect(starIcon.props.name).toBe('star-o');
  });

  it('should allow deleting posts', async () => {
    const {getByTestId, queryByText} = render(<PostList />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    const firstPost = mockedPosts[0];
    const trashIcon = getByTestId(`trash-icon-${firstPost.id}`);
    fireEvent.press(trashIcon);
    expect(queryByText('First post')).toBeNull();
  });
});

describe('PostDetails', () => {
  it('should display post details', async () => {
    const post = {
      id: 1,
      title: 'First post',
      body: 'Body of first post',
      userId: 1,
    };
    const {getByText} = render(<PostDetails route={{params: {post}}} />);
    expect(getByText('First post')).toBeDefined();
    expect(getByText('Body of first post')).toBeDefined();
    expect(getByText('Posted by user 1')).toBeDefined();
  });
});
