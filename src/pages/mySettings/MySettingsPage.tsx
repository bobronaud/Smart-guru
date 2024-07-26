import { MySettingsComponent } from '@/components/mySettings/MySettings';
import { PageLayout } from '@/components/pageLayout/PageLayout';
import { FC } from 'react';

export const MySettings: FC = () => {
	return (
		<PageLayout>
			<MySettingsComponent />
		</PageLayout>
	);
};
