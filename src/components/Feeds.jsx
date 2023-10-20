import { Box } from "@mui/material";
import { Post } from "./Post";

export const Feeds = () => {
  const posts = [
    {
      avatar: "M",
      user: "Monika Sivakumar",
      date: "November 13, 1998",
      image:
        "https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-pancakes-with-berries-and-marple-syrup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      description:
        "This impressive pancake is a perfect breakfast and a fun meal to cook together with your guests. Add 1 cup of frozen cream along with the mussels, if you like.",
    },
    {
      avatar: "A",
      user: "Abishek Sivakumar",
      date: "June 19, 2000",
      image:
        "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800",

      description:
        "This impressive pancake is a perfect breakfast and a fun meal to cook together with your guests. Add 1 cup of frozen cream along with the mussels, if you like.",
    },
    {
      avatar: "S",
      user: "Shajana Krishnan",
      date: "April 18, 2001",
      image:
        "https://images.pexels.com/photos/16803393/pexels-photo-16803393/free-photo-of-pizzas-on-the-table-at-the-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      description:
        "This impressive pancake is a perfect breakfast and a fun meal to cook together with your guests. Add 1 cup of frozen cream along with the mussels, if you like.",
    },
    {
      avatar: "R",
      user: "Rethika Krishnan",
      date: "Spetember 07, 2003",
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",

      description:
        "This impressive pancake is a perfect breakfast and a fun meal to cook together with your guests. Add 1 cup of frozen cream along with the mussels, if you like.",
    },
    {
      avatar: "S",
      user: "Shamiksha",
      date: "March 19, 2004",
      image:
        "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=800",

      description:
        "This impressive pancake is a perfect breakfast and a fun meal to cook together with your guests. Add 1 cup of frozen cream along with the mussels, if you like.",
    },
  ];
  return (
    <Box flex={4}>
      {posts.map((post) => (
        <Post
          avatar={post.avatar}
          user={post.user}
          date={post.date}
          image={post.image}
          description={post.description}
        />
      ))}
    </Box>
  );
};
