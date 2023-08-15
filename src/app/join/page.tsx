import JoinContextProvider from './components/JoinContext';
import JoinFunnel from './funnels/JoinFunnel';

export default function JoinPage() {
  return (
    <main className="h-full px-20">
      <JoinContextProvider>
        <JoinFunnel />
      </JoinContextProvider>
    </main>
  );
}
