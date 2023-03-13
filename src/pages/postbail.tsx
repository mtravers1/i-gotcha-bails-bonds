import { FC } from 'react';
import { BannerSection } from 'components/bannerSection/postBail';
import { Button } from 'components/button';
import { Input } from 'components/input';
import formData from 'data/postbailFormData';
import { useForm } from 'hooks/useForm';
import { PageLayout } from 'layouts/pageLayout';

const Postbail: FC = () => {
  const { handleChange, inputTypes, handleSubmit, errors } = useForm({
    inputs: formData,
    cb: () => {
      return;
    },
  });

  return (
    <PageLayout
      pageTitle={{ id: 'post-bail.title', defaultMessage: 'Post Bail Online' }}
    >
      <BannerSection />

      <div className="max-w-3xl mx-auto py-10 w-full">
        {formData.map((data: any, i: number) => (
          <Input
            key={`${data.name}-${i}`}
            name={data.name}
            label={data.label}
            value={inputTypes[data.name]}
            handleChange={handleChange}
            type={data.type}
            placeholder={data.placeholder}
            errors={errors}
            errorMsg={data.errorMessage}
          />
        ))}

        <div className="mt-5">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Postbail;
