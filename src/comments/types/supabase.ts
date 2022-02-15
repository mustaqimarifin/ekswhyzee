/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/': {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  '/comment_with_author': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.comment_with_author.id'];
          cn_id?: parameters['rowFilter.comment_with_author.cn_id'];
          cnp_id?: parameters['rowFilter.comment_with_author.cnp_id'];
          name?: parameters['rowFilter.comment_with_author.name'];
          image?: parameters['rowFilter.comment_with_author.image'];
          slug?: parameters['rowFilter.comment_with_author.slug'];
          createdAt?: parameters['rowFilter.comment_with_author.createdAt'];
          updatedAt?: parameters['rowFilter.comment_with_author.updatedAt'];
          text?: parameters['rowFilter.comment_with_author.text'];
          authorId?: parameters['rowFilter.comment_with_author.authorId'];
          parentId?: parameters['rowFilter.comment_with_author.parentId'];
          author?: parameters['rowFilter.comment_with_author.author'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['comment_with_author'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
  '/comment_with_author_votes': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.comment_with_author_votes.id'];
          cn_id?: parameters['rowFilter.comment_with_author_votes.cn_id'];
          cnp_id?: parameters['rowFilter.comment_with_author_votes.cnp_id'];
          name?: parameters['rowFilter.comment_with_author_votes.name'];
          image?: parameters['rowFilter.comment_with_author_votes.image'];
          slug?: parameters['rowFilter.comment_with_author_votes.slug'];
          createdAt?: parameters['rowFilter.comment_with_author_votes.createdAt'];
          updatedAt?: parameters['rowFilter.comment_with_author_votes.updatedAt'];
          text?: parameters['rowFilter.comment_with_author_votes.text'];
          authorId?: parameters['rowFilter.comment_with_author_votes.authorId'];
          parentId?: parameters['rowFilter.comment_with_author_votes.parentId'];
          author?: parameters['rowFilter.comment_with_author_votes.author'];
          votes?: parameters['rowFilter.comment_with_author_votes.votes'];
          upvotes?: parameters['rowFilter.comment_with_author_votes.upvotes'];
          downvotes?: parameters['rowFilter.comment_with_author_votes.downvotes'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['comment_with_author_votes'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
  '/comments': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.comments.id'];
          slug?: parameters['rowFilter.comments.slug'];
          createdAt?: parameters['rowFilter.comments.createdAt'];
          updatedAt?: parameters['rowFilter.comments.updatedAt'];
          text?: parameters['rowFilter.comments.text'];
          authorId?: parameters['rowFilter.comments.authorId'];
          parentId?: parameters['rowFilter.comments.parentId'];
          name?: parameters['rowFilter.comments.name'];
          image?: parameters['rowFilter.comments.image'];
          cn_id?: parameters['rowFilter.comments.cn_id'];
          cnp_id?: parameters['rowFilter.comments.cnp_id'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['comments'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** comments */
          comments?: definitions['comments'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.comments.id'];
          slug?: parameters['rowFilter.comments.slug'];
          createdAt?: parameters['rowFilter.comments.createdAt'];
          updatedAt?: parameters['rowFilter.comments.updatedAt'];
          text?: parameters['rowFilter.comments.text'];
          authorId?: parameters['rowFilter.comments.authorId'];
          parentId?: parameters['rowFilter.comments.parentId'];
          name?: parameters['rowFilter.comments.name'];
          image?: parameters['rowFilter.comments.image'];
          cn_id?: parameters['rowFilter.comments.cn_id'];
          cnp_id?: parameters['rowFilter.comments.cnp_id'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.comments.id'];
          slug?: parameters['rowFilter.comments.slug'];
          createdAt?: parameters['rowFilter.comments.createdAt'];
          updatedAt?: parameters['rowFilter.comments.updatedAt'];
          text?: parameters['rowFilter.comments.text'];
          authorId?: parameters['rowFilter.comments.authorId'];
          parentId?: parameters['rowFilter.comments.parentId'];
          name?: parameters['rowFilter.comments.name'];
          image?: parameters['rowFilter.comments.image'];
          cn_id?: parameters['rowFilter.comments.cn_id'];
          cnp_id?: parameters['rowFilter.comments.cnp_id'];
        };
        body: {
          /** comments */
          comments?: definitions['comments'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/comments_linear_view': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.comments_linear_view.id'];
          cn_id?: parameters['rowFilter.comments_linear_view.cn_id'];
          cnp_id?: parameters['rowFilter.comments_linear_view.cnp_id'];
          name?: parameters['rowFilter.comments_linear_view.name'];
          image?: parameters['rowFilter.comments_linear_view.image'];
          slug?: parameters['rowFilter.comments_linear_view.slug'];
          createdAt?: parameters['rowFilter.comments_linear_view.createdAt'];
          updatedAt?: parameters['rowFilter.comments_linear_view.updatedAt'];
          text?: parameters['rowFilter.comments_linear_view.text'];
          authorId?: parameters['rowFilter.comments_linear_view.authorId'];
          parentId?: parameters['rowFilter.comments_linear_view.parentId'];
          author?: parameters['rowFilter.comments_linear_view.author'];
          parent?: parameters['rowFilter.comments_linear_view.parent'];
          replies?: parameters['rowFilter.comments_linear_view.replies'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['comments_linear_view'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
  '/comments_thread': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.comments_thread.id'];
          cn_id?: parameters['rowFilter.comments_thread.cn_id'];
          cnp_id?: parameters['rowFilter.comments_thread.cnp_id'];
          name?: parameters['rowFilter.comments_thread.name'];
          image?: parameters['rowFilter.comments_thread.image'];
          slug?: parameters['rowFilter.comments_thread.slug'];
          createdAt?: parameters['rowFilter.comments_thread.createdAt'];
          updatedAt?: parameters['rowFilter.comments_thread.updatedAt'];
          text?: parameters['rowFilter.comments_thread.text'];
          authorId?: parameters['rowFilter.comments_thread.authorId'];
          parentId?: parameters['rowFilter.comments_thread.parentId'];
          author?: parameters['rowFilter.comments_thread.author'];
          votes?: parameters['rowFilter.comments_thread.votes'];
          upvotes?: parameters['rowFilter.comments_thread.upvotes'];
          downvotes?: parameters['rowFilter.comments_thread.downvotes'];
          depth?: parameters['rowFilter.comments_thread.depth'];
          path?: parameters['rowFilter.comments_thread.path'];
          pathVotesRecent?: parameters['rowFilter.comments_thread.pathVotesRecent'];
          pathLeastRecent?: parameters['rowFilter.comments_thread.pathLeastRecent'];
          pathMostRecent?: parameters['rowFilter.comments_thread.pathMostRecent'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['comments_thread'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
  '/comments_thread_with_user_vote': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.comments_thread_with_user_vote.id'];
          cn_id?: parameters['rowFilter.comments_thread_with_user_vote.cn_id'];
          cnp_id?: parameters['rowFilter.comments_thread_with_user_vote.cnp_id'];
          name?: parameters['rowFilter.comments_thread_with_user_vote.name'];
          image?: parameters['rowFilter.comments_thread_with_user_vote.image'];
          slug?: parameters['rowFilter.comments_thread_with_user_vote.slug'];
          createdAt?: parameters['rowFilter.comments_thread_with_user_vote.createdAt'];
          updatedAt?: parameters['rowFilter.comments_thread_with_user_vote.updatedAt'];
          text?: parameters['rowFilter.comments_thread_with_user_vote.text'];
          authorId?: parameters['rowFilter.comments_thread_with_user_vote.authorId'];
          parentId?: parameters['rowFilter.comments_thread_with_user_vote.parentId'];
          author?: parameters['rowFilter.comments_thread_with_user_vote.author'];
          votes?: parameters['rowFilter.comments_thread_with_user_vote.votes'];
          upvotes?: parameters['rowFilter.comments_thread_with_user_vote.upvotes'];
          downvotes?: parameters['rowFilter.comments_thread_with_user_vote.downvotes'];
          depth?: parameters['rowFilter.comments_thread_with_user_vote.depth'];
          path?: parameters['rowFilter.comments_thread_with_user_vote.path'];
          pathVotesRecent?: parameters['rowFilter.comments_thread_with_user_vote.pathVotesRecent'];
          pathLeastRecent?: parameters['rowFilter.comments_thread_with_user_vote.pathLeastRecent'];
          pathMostRecent?: parameters['rowFilter.comments_thread_with_user_vote.pathMostRecent'];
          userVoteValue?: parameters['rowFilter.comments_thread_with_user_vote.userVoteValue'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['comments_thread_with_user_vote'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
  '/likes': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.likes.id'];
          slug?: parameters['rowFilter.likes.slug'];
          ip?: parameters['rowFilter.likes.ip'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['likes'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** likes */
          likes?: definitions['likes'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.likes.id'];
          slug?: parameters['rowFilter.likes.slug'];
          ip?: parameters['rowFilter.likes.ip'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.likes.id'];
          slug?: parameters['rowFilter.likes.slug'];
          ip?: parameters['rowFilter.likes.ip'];
        };
        body: {
          /** likes */
          likes?: definitions['likes'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/pages': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.pages.id'];
          ip?: parameters['rowFilter.pages.ip'];
          slug?: parameters['rowFilter.pages.slug'];
          views?: parameters['rowFilter.pages.views'];
          likes?: parameters['rowFilter.pages.likes'];
          updated_at?: parameters['rowFilter.pages.updated_at'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['pages'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** pages */
          pages?: definitions['pages'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.pages.id'];
          ip?: parameters['rowFilter.pages.ip'];
          slug?: parameters['rowFilter.pages.slug'];
          views?: parameters['rowFilter.pages.views'];
          likes?: parameters['rowFilter.pages.likes'];
          updated_at?: parameters['rowFilter.pages.updated_at'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.pages.id'];
          ip?: parameters['rowFilter.pages.ip'];
          slug?: parameters['rowFilter.pages.slug'];
          views?: parameters['rowFilter.pages.views'];
          likes?: parameters['rowFilter.pages.likes'];
          updated_at?: parameters['rowFilter.pages.updated_at'];
        };
        body: {
          /** pages */
          pages?: definitions['pages'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/profiles': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.profiles.id'];
          updated_at?: parameters['rowFilter.profiles.updated_at'];
          username?: parameters['rowFilter.profiles.username'];
          full_name?: parameters['rowFilter.profiles.full_name'];
          avatar_url?: parameters['rowFilter.profiles.avatar_url'];
          email?: parameters['rowFilter.profiles.email'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['profiles'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions['profiles'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.profiles.id'];
          updated_at?: parameters['rowFilter.profiles.updated_at'];
          username?: parameters['rowFilter.profiles.username'];
          full_name?: parameters['rowFilter.profiles.full_name'];
          avatar_url?: parameters['rowFilter.profiles.avatar_url'];
          email?: parameters['rowFilter.profiles.email'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.profiles.id'];
          updated_at?: parameters['rowFilter.profiles.updated_at'];
          username?: parameters['rowFilter.profiles.username'];
          full_name?: parameters['rowFilter.profiles.full_name'];
          avatar_url?: parameters['rowFilter.profiles.avatar_url'];
          email?: parameters['rowFilter.profiles.email'];
        };
        body: {
          /** profiles */
          profiles?: definitions['profiles'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/votes': {
    get: {
      parameters: {
        query: {
          commentId?: parameters['rowFilter.votes.commentId'];
          authorId?: parameters['rowFilter.votes.authorId'];
          combId?: parameters['rowFilter.votes.combId'];
          value?: parameters['rowFilter.votes.value'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['votes'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** votes */
          votes?: definitions['votes'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          commentId?: parameters['rowFilter.votes.commentId'];
          authorId?: parameters['rowFilter.votes.authorId'];
          combId?: parameters['rowFilter.votes.combId'];
          value?: parameters['rowFilter.votes.value'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          commentId?: parameters['rowFilter.votes.commentId'];
          authorId?: parameters['rowFilter.votes.authorId'];
          combId?: parameters['rowFilter.votes.combId'];
          value?: parameters['rowFilter.votes.value'];
        };
        body: {
          /** votes */
          votes?: definitions['votes'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/rpc/handle_new_user': {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferParams'];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  '/rpc/addPageView': {
    post: {
      parameters: {
        body: {
          args: {
            page_slug: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferParams'];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  comment_with_author: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id?: string;
    cn_id?: number;
    /**
     * Note:
     * This is a Foreign Key to `comments.cn_id`.<fk table='comments' column='cn_id'/>
     */
    cnp_id?: number;
    /**
     * Note:
     * This is a Foreign Key to `profiles.full_name`.<fk table='profiles' column='full_name'/>
     */
    name?: string;
    /**
     * Note:
     * This is a Foreign Key to `profiles.avatar_url`.<fk table='profiles' column='avatar_url'/>
     */
    image?: string;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
    text?: string;
    /**
     * Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    authorId?: string;
    /**
     * Note:
     * This is a Foreign Key to `comments.id`.<fk table='comments' column='id'/>
     */
    parentId?: string;
    author?: string;
  };
  comment_with_author_votes: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id?: string;
    cn_id?: number;
    /**
     * Note:
     * This is a Foreign Key to `comments.cn_id`.<fk table='comments' column='cn_id'/>
     */
    cnp_id?: number;
    /**
     * Note:
     * This is a Foreign Key to `profiles.full_name`.<fk table='profiles' column='full_name'/>
     */
    name?: string;
    /**
     * Note:
     * This is a Foreign Key to `profiles.avatar_url`.<fk table='profiles' column='avatar_url'/>
     */
    image?: string;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
    text?: string;
    /**
     * Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    authorId?: string;
    /**
     * Note:
     * This is a Foreign Key to `comments.id`.<fk table='comments' column='id'/>
     */
    parentId?: string;
    author?: string;
    votes?: number;
    upvotes?: number;
    downvotes?: number;
  };
  comments: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    slug?: string;
    createdAt: string;
    updatedAt?: string;
    text: string;
    /**
     * Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    authorId: string;
    /**
     * Note:
     * This is a Foreign Key to `comments.id`.<fk table='comments' column='id'/>
     */
    parentId?: string;
    /**
     * Note:
     * This is a Foreign Key to `profiles.full_name`.<fk table='profiles' column='full_name'/>
     */
    name?: string;
    /**
     * Note:
     * This is a Foreign Key to `profiles.avatar_url`.<fk table='profiles' column='avatar_url'/>
     */
    image?: string;
    cn_id: number;
    /**
     * Note:
     * This is a Foreign Key to `comments.cn_id`.<fk table='comments' column='cn_id'/>
     */
    cnp_id?: number;
  };
  comments_linear_view: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id?: string;
    cn_id?: number;
    /**
     * Note:
     * This is a Foreign Key to `comments.cn_id`.<fk table='comments' column='cn_id'/>
     */
    cnp_id?: number;
    /**
     * Note:
     * This is a Foreign Key to `profiles.full_name`.<fk table='profiles' column='full_name'/>
     */
    name?: string;
    /**
     * Note:
     * This is a Foreign Key to `profiles.avatar_url`.<fk table='profiles' column='avatar_url'/>
     */
    image?: string;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
    text?: string;
    /**
     * Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    authorId?: string;
    /**
     * Note:
     * This is a Foreign Key to `comments.id`.<fk table='comments' column='id'/>
     */
    parentId?: string;
    author?: string;
    parent?: string;
    replies?: string;
  };
  comments_thread: {
    id?: string;
    cn_id?: number;
    cnp_id?: number;
    name?: string;
    image?: string;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
    text?: string;
    authorId?: string;
    parentId?: string;
    author?: string;
    votes?: number;
    upvotes?: number;
    downvotes?: number;
    depth?: number;
    path?: unknown[];
    pathVotesRecent?: unknown[];
    pathLeastRecent?: unknown[];
    pathMostRecent?: unknown[];
  };
  comments_thread_with_user_vote: {
    id?: string;
    cn_id?: number;
    cnp_id?: number;
    name?: string;
    image?: string;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
    text?: string;
    authorId?: string;
    parentId?: string;
    author?: string;
    votes?: number;
    upvotes?: number;
    downvotes?: number;
    depth?: number;
    path?: unknown[];
    pathVotesRecent?: unknown[];
    pathLeastRecent?: unknown[];
    pathMostRecent?: unknown[];
    userVoteValue?: number;
  };
  likes: {
    id: number;
    slug?: string;
    ip?: string;
  };
  pages: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    ip?: string;
    slug: string;
    views: number;
    likes?: number;
    updated_at: string;
  };
  profiles: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    updated_at?: string;
    username?: string;
    full_name?: string;
    avatar_url?: string;
    email?: string;
  };
  votes: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `comments.id`.<fk table='comments' column='id'/>
     */
    commentId: string;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    authorId: string;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `comments.cn_id`.<fk table='comments' column='cn_id'/>
     */
    combId: number;
    value: number;
  };
}

export interface parameters {
  /** Preference */
  preferParams: 'params=single-object';
  /** Preference */
  preferReturn: 'return=representation' | 'return=minimal' | 'return=none';
  /** Preference */
  preferCount: 'count=none';
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** comment_with_author */
  'body.comment_with_author': definitions['comment_with_author'];
  'rowFilter.comment_with_author.id': string;
  'rowFilter.comment_with_author.cn_id': string;
  'rowFilter.comment_with_author.cnp_id': string;
  'rowFilter.comment_with_author.name': string;
  'rowFilter.comment_with_author.image': string;
  'rowFilter.comment_with_author.slug': string;
  'rowFilter.comment_with_author.createdAt': string;
  'rowFilter.comment_with_author.updatedAt': string;
  'rowFilter.comment_with_author.text': string;
  'rowFilter.comment_with_author.authorId': string;
  'rowFilter.comment_with_author.parentId': string;
  'rowFilter.comment_with_author.author': string;
  /** comment_with_author_votes */
  'body.comment_with_author_votes': definitions['comment_with_author_votes'];
  'rowFilter.comment_with_author_votes.id': string;
  'rowFilter.comment_with_author_votes.cn_id': string;
  'rowFilter.comment_with_author_votes.cnp_id': string;
  'rowFilter.comment_with_author_votes.name': string;
  'rowFilter.comment_with_author_votes.image': string;
  'rowFilter.comment_with_author_votes.slug': string;
  'rowFilter.comment_with_author_votes.createdAt': string;
  'rowFilter.comment_with_author_votes.updatedAt': string;
  'rowFilter.comment_with_author_votes.text': string;
  'rowFilter.comment_with_author_votes.authorId': string;
  'rowFilter.comment_with_author_votes.parentId': string;
  'rowFilter.comment_with_author_votes.author': string;
  'rowFilter.comment_with_author_votes.votes': string;
  'rowFilter.comment_with_author_votes.upvotes': string;
  'rowFilter.comment_with_author_votes.downvotes': string;
  /** comments */
  'body.comments': definitions['comments'];
  'rowFilter.comments.id': string;
  'rowFilter.comments.slug': string;
  'rowFilter.comments.createdAt': string;
  'rowFilter.comments.updatedAt': string;
  'rowFilter.comments.text': string;
  'rowFilter.comments.authorId': string;
  'rowFilter.comments.parentId': string;
  'rowFilter.comments.name': string;
  'rowFilter.comments.image': string;
  'rowFilter.comments.cn_id': string;
  'rowFilter.comments.cnp_id': string;
  /** comments_linear_view */
  'body.comments_linear_view': definitions['comments_linear_view'];
  'rowFilter.comments_linear_view.id': string;
  'rowFilter.comments_linear_view.cn_id': string;
  'rowFilter.comments_linear_view.cnp_id': string;
  'rowFilter.comments_linear_view.name': string;
  'rowFilter.comments_linear_view.image': string;
  'rowFilter.comments_linear_view.slug': string;
  'rowFilter.comments_linear_view.createdAt': string;
  'rowFilter.comments_linear_view.updatedAt': string;
  'rowFilter.comments_linear_view.text': string;
  'rowFilter.comments_linear_view.authorId': string;
  'rowFilter.comments_linear_view.parentId': string;
  'rowFilter.comments_linear_view.author': string;
  'rowFilter.comments_linear_view.parent': string;
  'rowFilter.comments_linear_view.replies': string;
  /** comments_thread */
  'body.comments_thread': definitions['comments_thread'];
  'rowFilter.comments_thread.id': string;
  'rowFilter.comments_thread.cn_id': string;
  'rowFilter.comments_thread.cnp_id': string;
  'rowFilter.comments_thread.name': string;
  'rowFilter.comments_thread.image': string;
  'rowFilter.comments_thread.slug': string;
  'rowFilter.comments_thread.createdAt': string;
  'rowFilter.comments_thread.updatedAt': string;
  'rowFilter.comments_thread.text': string;
  'rowFilter.comments_thread.authorId': string;
  'rowFilter.comments_thread.parentId': string;
  'rowFilter.comments_thread.author': string;
  'rowFilter.comments_thread.votes': string;
  'rowFilter.comments_thread.upvotes': string;
  'rowFilter.comments_thread.downvotes': string;
  'rowFilter.comments_thread.depth': string;
  'rowFilter.comments_thread.path': string;
  'rowFilter.comments_thread.pathVotesRecent': string;
  'rowFilter.comments_thread.pathLeastRecent': string;
  'rowFilter.comments_thread.pathMostRecent': string;
  /** comments_thread_with_user_vote */
  'body.comments_thread_with_user_vote': definitions['comments_thread_with_user_vote'];
  'rowFilter.comments_thread_with_user_vote.id': string;
  'rowFilter.comments_thread_with_user_vote.cn_id': string;
  'rowFilter.comments_thread_with_user_vote.cnp_id': string;
  'rowFilter.comments_thread_with_user_vote.name': string;
  'rowFilter.comments_thread_with_user_vote.image': string;
  'rowFilter.comments_thread_with_user_vote.slug': string;
  'rowFilter.comments_thread_with_user_vote.createdAt': string;
  'rowFilter.comments_thread_with_user_vote.updatedAt': string;
  'rowFilter.comments_thread_with_user_vote.text': string;
  'rowFilter.comments_thread_with_user_vote.authorId': string;
  'rowFilter.comments_thread_with_user_vote.parentId': string;
  'rowFilter.comments_thread_with_user_vote.author': string;
  'rowFilter.comments_thread_with_user_vote.votes': string;
  'rowFilter.comments_thread_with_user_vote.upvotes': string;
  'rowFilter.comments_thread_with_user_vote.downvotes': string;
  'rowFilter.comments_thread_with_user_vote.depth': string;
  'rowFilter.comments_thread_with_user_vote.path': string;
  'rowFilter.comments_thread_with_user_vote.pathVotesRecent': string;
  'rowFilter.comments_thread_with_user_vote.pathLeastRecent': string;
  'rowFilter.comments_thread_with_user_vote.pathMostRecent': string;
  'rowFilter.comments_thread_with_user_vote.userVoteValue': string;
  /** likes */
  'body.likes': definitions['likes'];
  'rowFilter.likes.id': string;
  'rowFilter.likes.slug': string;
  'rowFilter.likes.ip': string;
  /** pages */
  'body.pages': definitions['pages'];
  'rowFilter.pages.id': string;
  'rowFilter.pages.ip': string;
  'rowFilter.pages.slug': string;
  'rowFilter.pages.views': string;
  'rowFilter.pages.likes': string;
  'rowFilter.pages.updated_at': string;
  /** profiles */
  'body.profiles': definitions['profiles'];
  'rowFilter.profiles.id': string;
  'rowFilter.profiles.updated_at': string;
  'rowFilter.profiles.username': string;
  'rowFilter.profiles.full_name': string;
  'rowFilter.profiles.avatar_url': string;
  'rowFilter.profiles.email': string;
  /** votes */
  'body.votes': definitions['votes'];
  'rowFilter.votes.commentId': string;
  'rowFilter.votes.authorId': string;
  'rowFilter.votes.combId': string;
  'rowFilter.votes.value': string;
}

export interface operations {}

export interface external {}
