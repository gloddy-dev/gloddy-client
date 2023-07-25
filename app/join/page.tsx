import JoinContextProvider from './components/JoinContext';
import JoinFunnel from './components/JoinFunnel';

export default function JoinPage() {
  return (
    <JoinContextProvider>
      <JoinFunnel />
    </JoinContextProvider>
  );
}
