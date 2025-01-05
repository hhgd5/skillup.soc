import { supabase } from "@/lib/supabase";

/* type Workshop = {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  created_at: Date;
}; */

async function fetchWorkshops() {
  const { data: workshops, error } = await supabase.from("workshops").select("*");
  
  if (error) {
    console.error("Error fetching workshops:", error.message);
    return [];
  }
  console.log("Fetched workshops:", workshops);
  return workshops || [];
}

const Page = async () => {
  const workshops = await fetchWorkshops();

  if (!workshops.length) {
    return (
      <div>
        <h1>Workshops</h1>
        <p>No workshops found.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Workshops</h1>
      <ul>
        {workshops.map((workshop) => (
          <li key={workshop.id}>
            <h3>{workshop.title}</h3>
            <p>{workshop.description}</p>
            <p>{new Date(workshop.date).toLocaleString()}</p>
            <p>{workshop.location}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Page;
