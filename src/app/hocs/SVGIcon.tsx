'use client';
import dynamic from 'next/dynamic';
import { Attributes, ComponentType, CSSProperties, ReactElement, SVGProps, useEffect, useState } from 'react';

export interface SVGIconProps extends Partial<SVGProps<SVGElement>> {
  name: string;
  folder?: string;
  wrapperStyling?: Partial<{ className: string; style: Partial<CSSProperties> }>;
}

const cache = new Map<string, ComponentType<Attributes>>();

export default function SVGIcon({
  name,
  folder = 'icons',
  wrapperStyling,
  ...props
}: SVGIconProps): ReactElement<SVGElement> | null {
  const [Component, setComponent] = useState<ComponentType<Attributes> | null>(null);

  useEffect(() => {
    const filePath = `/${folder}/${name}`;
    const cachedIcon = cache.get(filePath);

    if (cachedIcon) {
      setComponent(() => cachedIcon);
    } else {
      const loadComponent = async () => {
        try {
          const icon = dynamic(() => import(`../_resources/icons/${name}.svg`), {
            loading: () => <></>,
            ssr: false,
          }) as ComponentType<Attributes>;

          cache.set(filePath, icon);
          setComponent(() => icon);
        } catch (error) {
          console.error(`Error loading icon: ${name}`, error);
        }
      };

      loadComponent();
    }
  }, [name, folder]);

  if (!Component) return null;

  return (
    <div {...wrapperStyling}>
      <Component {...props} />
    </div>
  );
}
