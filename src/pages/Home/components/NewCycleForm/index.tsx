import { zodResolver } from '@hookform/resolvers/zod'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, '1 minuto é o minimo')
    .max(60, '60 minutos é o máximo'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
  resolver: zodResolver(newCycleFormValidationSchema),
  defaultValues: {
    task: '',
    minutesAmount: 0,
  },
})

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="P1"></option>
        <option value="P1"></option>
        <option value="P1"></option>
        <option value="Potato"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
