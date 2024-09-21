import { Spinner } from './styles';

export interface LoadingProps {
    size?: number;
    color?: string;
}
    
export function Loading({ size, color = 'gray' }:LoadingProps){
    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Spinner size={size} color={color} />
        </div>
      );
};
