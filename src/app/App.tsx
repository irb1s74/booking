import { Switch } from 'shared/ui/Switch'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

export const App = () => {
  return (
    <div className='app'>
      <Button autoFocus={true} square={false} color='light'>
        Button
      </Button>
      <Switch />
      <Input type='date' />
      <Input type='number' />
      <Input type='checkbox' />
      <Input type='radio' />
    </div>
  )
}
