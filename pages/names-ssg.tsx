import type {
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";

import {fetchNames} from "@/utils/fetch-names";

type responseItemType = {
  id: string;
  name: string;
}

const NamesSSG: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const output = props.names.map((item: responseItemType, idx: number) => {
    return (
      <li key={`name-${idx}`}>
        {item.id}: {item.name}
      </li>
    )
  })

  return (
    <ul>{output}</ul>
  )
}

export const getStaticProps: GetStaticProps = async (
) => {
  let names: responseItemType[] | [] = [];
  try {
    names = await fetchNames();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch(err) {}
  return {
    props: {
      names
    },
    revalidate: 5
  };
};


export default NamesSSG