import React from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

/* type Member = {
  id: string;
  full_name: string;
  role: string;
  picture: string;
}; */

async function fetchMembers() {
  const { data: members, error } = await supabase.from("Members").select("*");
  if (error) {
    console.error("Error fetching members:", error.message);
    return [];
  }
  console.log('Fetched members:', members);
  return members || [];
}

const Page = async () => {
  const members = await fetchMembers();

  if (!members.length) {
    return (
      <div>
        <h1>Members</h1>
        <p>No members found.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Members</h1>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            <Image src={member.picture} alt={member.full_name} width={100} height={100} />
            <p>
              {member.full_name} - {member.role}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
