import JoinContextProvider from './components/JoinContext';
import JoinFunnel from './funnels/JoinFunnel';

export default function JoinPage() {
  return (
    <JoinContextProvider>
      <JoinFunnel />
    </JoinContextProvider>
  );
}
