import Link from "next/link";
import { useRouter } from 'next/router';
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { FaChartPie, FaBalanceScaleLeft, FaListUl, FaUserFriends } from "react-icons/fa";
import { FaGears } from "react-icons/fa6"


const Navigation = () => {

  const router = useRouter();

  const genStyle = (path: string) => 
    router.pathname.startsWith(path) 
      ?  `flex gap-4 mb-1 px-4 py-2 hover:bg-gray-800 rounded-md items-center bg-gray-800`
      : 'flex gap-4 mb-1 px-4 py-2 hover:bg-gray-800 rounded-md items-center'

  return (
    <div className="flex flex-col gap-3 mt-4 w-full text-xl">
      <List>
        <Link href="/dashboard/0">
          <ListItem className={genStyle('/dashboard')}>
            <ListItemPrefix>
              <FaChartPie />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link href="/balance">
          <ListItem className={genStyle('/balance')}>
            <ListItemPrefix>
              <FaBalanceScaleLeft />
            </ListItemPrefix>
            Balance
          </ListItem>
        </Link>
        <Link href="/records">
          <ListItem className={genStyle('/records')}>
            <ListItemPrefix>
              <FaListUl />
            </ListItemPrefix>
            Records
          </ListItem>
        </Link>
        <Link href="/members"> 
          <ListItem className={genStyle('/members')}>
            <ListItemPrefix>
              <FaUserFriends />
            </ListItemPrefix>
            Members
          </ListItem>
        </Link>
        <Link href="/settings">
          <ListItem className={genStyle('/settings')}>
            <ListItemPrefix>
              <FaGears />
            </ListItemPrefix>
            Settings
          </ListItem>
        </Link>
      </List>
    </div>
  )
};

export default Navigation;