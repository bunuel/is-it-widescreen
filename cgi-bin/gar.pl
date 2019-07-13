#!/usr/bin/perl

print "Content-Type: application/json\n";

print "Access-Control-Allow-Origin: *\n\n";

my $imdb_id = $ENV{QUERY_STRING} || shift(@ARGV);

use LWP::UserAgent ();
 
my $ua = LWP::UserAgent->new(timeout => 10);
$ua->env_proxy;
$ua->agent('Mozilla/5.0');

my $imdb_url = "https://www.imdb.com/title/" . $imdb_id . "/";

my $response = $ua->get($imdb_url);

my $content = "";

if ($response->is_success) {
    $content = $response->decoded_content;
}
else {
    die $response->status_line;
}

my @content_chunks_list = split(/Aspect Ratio:<.*>/, $content);

my $aspect_ratio = $content_chunks_list[1];

$aspect_ratio = substr $aspect_ratio, 1, 9;

$aspect_ratio =~ s/^\s+|\s+$//g;

my $json_text = '{"aspect_ratio":"' . $aspect_ratio . '"}';

print($json_text);

exit;