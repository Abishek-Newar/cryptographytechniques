
import Cryptography from "@/components/Cryptography";
import Encoding from "@/components/Encoding";
import Hashing from "@/components/Hashing";
import Pages from "@/components/Pages";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/Navbar";
export default function Home() {

  return (
      <main className="" >
      <Navbar />
     <div className="flex">
     <Sidebar />
     <Pages />
     </div>
    </main>
  );
}
