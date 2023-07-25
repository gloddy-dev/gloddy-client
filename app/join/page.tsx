import JoinContextProvider from './components/JoinContext';
import JoinFunnel from './components/JoinFunnel';

export default function JoinPage() {
  return (
    <main className="px-20">
      <JoinContextProvider>
        <JoinFunnel />
      </JoinContextProvider>
    </main>
  );
}
