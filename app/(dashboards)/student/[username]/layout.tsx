import Container from '@/components/shared/Container'
import StudentSidebar from '@/components/student/StudentSidebar'
import { Card } from '@/components/ui/card';

const layout = async ({ children, params }: { children: React.ReactNode, params: Promise<{ username: string }> }) => {
  const { username } = await params;
  console.log(username)
  return (
    <div className="w-full">
      <div className='grid grid-cols-12 w-full h-full'>
        <div className='col-span-9'>
         
          {children}
        </div>
        <StudentSidebar username={username} />,
      </div>
    </div>
  )
}

export default layout