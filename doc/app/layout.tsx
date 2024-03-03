/**
 * @description next index
 * @author 阿怪
 * @date 2024/2/27 16:38
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import ClientRicePaper from '../components/clientRicePaper';
import 'shuimo-ui-react/dist/style.css';
import '../assets/styles/index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en">
    <body>
      <ClientRicePaper>
        {children}
      </ClientRicePaper>
    </body>
  </html>);
}
