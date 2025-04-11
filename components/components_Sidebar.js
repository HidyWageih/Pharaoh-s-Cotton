import Link from 'next/link';
import sidebarData from '../data_sidebar.json';

export default function Sidebar() {
  return (
    <div style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '20px' }}>
      <h3>القائمة الجانبية</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {sidebarData.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
