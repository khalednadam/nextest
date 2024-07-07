import React from "react";
import { Card } from "../ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

type UserProps = {
  name: string;
  avatarSrc: string;
};

export function User(props: UserProps) {
  return (
    <div>
      <Card className="w-1/2 mx-auto p-5 flex justify-start items-center space-x-4">
        <Avatar>
          <AvatarImage src={props.avatarSrc} />
          <AvatarFallback>
            {props.name?.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <p>{props.name}</p>
      </Card>
    </div>
  );
}
