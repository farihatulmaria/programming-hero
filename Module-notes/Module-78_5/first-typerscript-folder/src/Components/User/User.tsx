/* import React from "react";

const User = (props :{age:number}) => {
  return <div></div>;
};

export default User;
 */

import React, { FC } from "react";

interface Props {
  name?: string;
  age?: number;
}

const User: FC<Props> = (props) => {
  const name = props.name;
  const age = props.age;
  return (
    <div>
      <h1>{name}</h1>
      <h4>{age}</h4>
    </div>
  );
};

export default User;
