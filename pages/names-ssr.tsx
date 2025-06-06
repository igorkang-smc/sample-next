import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import {fetchNames} from "@/utils/fetch-names";

type responseItemType = {
  id: string;
  name: string;
}

const NamesSSR: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps: GetServerSideProps = async (
) => {
  let names: responseItemType[] | [] = [];
  try {
    names = await fetchNames();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch(err) {}
  return {
    props: {
      names
    }
  };
};


export default NamesSSR;