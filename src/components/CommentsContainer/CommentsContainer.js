import React from "react";

const commentsData = [
  {
    name: "Ronak Amin",
    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Ankit Kumar",
        text: "Nullam et ipsum vel arcu dignissim bibendum",
        replies: [
          {
            name: "Priya Sharma",
            text: "Donec vel ipsum id velit ultricies faucibus",
            replies: [
              {
                name: "Priya Sharma",
                text: "Maecenas vel ipsum in diam fermentum elementum",
                replies: [
                  {
                    name: "Priya Sharma",
                    text: "Proin consectetur purus eget neque consectetur, vitae viverra nunc facilisis.",
                    replies: [
                      {
                        name: "Priya Sharma",
                        text: "Vestibulum non ipsum vel risus consectetur laoreet.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ronak Amin",
    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Ankit Kumar",
        text: "Nullam et ipsum vel arcu dignissim bibendum",
        replies: [
          {
            name: "Priya Sharma",
            text: "Donec vel ipsum id velit ultricies faucibus",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ronak Amin",
    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Ankit Kumar",
        text: "Nullam et ipsum vel arcu dignissim bibendum",
        replies: [],
      },
    ],
  },
  {
    name: "Ronak Amin",
    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://iconape.com/wp-content/png_logo_vector/user-circle.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, i) => {
    return (
      <div key={i}>
        <Comment data={comment} />
        <div className="ml-5 pl-2 border border-l-black">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
