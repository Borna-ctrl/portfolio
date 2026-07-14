import { EyeProvider } from './eye/EyeContext'
import CoreStage from './components/CoreStage'

export default function App() {
  return (
    <EyeProvider>
      <CoreStage />
    </EyeProvider>
  )
}
