import React, { useContext } from "react";
import { ContextProject } from "../context";
import {
  TitleSocks,
  SectionSocks,
  SectionSocksChild,
  LinkSocksItem
} from "./uiProducts";

const Socks = () => {
  const context = useContext(ContextProject);
  return (
    <>
      <TitleSocks>جوراب ها</TitleSocks>

      <SectionSocks>
        {context.socksData.map(data => (
          <SectionSocksChild key={data.name}>
            <LinkSocksItem to={`/socks/${data.name}`}>
              <img src={data.img} alt={data.name} />
              <h2>{data.name}</h2>
              <del>{data.oldPrice}</del>
              <p>{data.newPrice}</p>
              <span>مشخصات</span>
            </LinkSocksItem>{" "}
          </SectionSocksChild>
        ))}
      </SectionSocks>
    </>
  );
};

export default Socks;
