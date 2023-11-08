import { FC } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Badge } from '@nextui-org/badge';
import { Button } from '@nextui-org/button';
import { Avatar } from '@nextui-org/avatar';
import { Message, Share } from 'src/assets/icons';
import InfoTime from '../ui/InfoTime';
import { RippleContainer } from '../ui/RippleContainer';
import { IPost } from 'src/models/';

const Post: FC<IPost> = ({
  topic,
  topicPhotoURL,
  userName,
  title,
  content,
}) => {
  const styleIcon = { style: { height: '1.1rem', width: '1.1rem' } };

  return (
    <Card className="w-full">
      <RippleContainer>
        <CardHeader className="mr-auto flex w-auto flex-none flex-col justify-start gap-3 pb-1">
          <div className="mr-auto flex h-5 items-center justify-start gap-3">
            <Avatar radius="full" size="sm" src={topicPhotoURL} />
            <div className="inline-flex items-center">
              <h2 className="flex text-small font-semibold leading-none text-default-600">
                {topic}
              </h2>
              <InfoTime content={`Posted by ${userName} 15 hr. ago`} />
            </div>
          </div>
          <h1 className="mr-auto text-left">{title}</h1>
        </CardHeader>
        <CardBody className="max-h-[10rem] overflow-hidden py-0 text-small text-default-400">
          <p>{content}</p>
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-content1 to-90% " />
        </CardBody>
        <CardFooter className="h-12 gap-1">
          <Button
            isIconOnly
            radius="full"
            variant="light"
            className="bg-transparent p-0 text-default-400"
          >
            <Badge content="1" className="border-none text-xs" size="sm">
              <Message {...styleIcon} />
            </Badge>
          </Button>
          <Button
            variant="light"
            isIconOnly
            radius="full"
            className="p-0 text-default-400"
          >
            <Share {...styleIcon} />
          </Button>
        </CardFooter>
      </RippleContainer>
    </Card>
  );
};

export default Post;